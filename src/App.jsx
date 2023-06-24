function App() {
	const staticConfig = { border: "2px solid red", padding: "5px", footer: <span>Pié de cuadro: </span> }

	const divsConfig = [
		{ name: "componente 1", component: <>20px</>, fontSize: "5px" },
		{ name: "componente 2", component: <>30px</>, fontSize: "10px" },
		{ name: "componente 3", component: <>40px</>, fontSize: "20px", backgroundColor: "orange" },
		{
      name: "componente 4",
      component: <>50px</>,
      fontSize: "30px",
      backgroundColor: "magenta",
      onClick: () => {
        alert('si')
      }
    },
		{ name: "componente 5", component: <>60px</>, fontSize: "40px", hidden: "hidden" },
		{ name: "componente 6", component: <>70px</>, fontSize: "50px" },
		{ name: "componente 7", component: <>80px</>, fontSize: "60px" },
		{ name: "componente 8", component: <>90px</>, fontSize: "70px" },
	]

	const ComponentRenderer = ({ component, fontSize, backgroundColor, staticConfig, name, ...rest }) => {
    console.log(rest)
		return (
			<>
				<div style={{  fontSize, backgroundColor, name, ...staticConfig }} {...rest} >
					{component}
				</div>
				<p style={{ marginBottom: "50px" }} {...rest}>
					{staticConfig.footer}
					{name}
				</p>
			</>
		)
	}

	return (
		<>
			{divsConfig.map((config, index) => (
				<ComponentRenderer key={index} staticConfig={staticConfig} {...config}/>
			))}
		</>
	)
}

export default App
