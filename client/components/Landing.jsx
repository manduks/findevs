Landing = React.createClass({
  render() {
    return (
      <section>
        <Header />
        <section className="intro section-padding">
            <div className="container">
                <div className="row">
                    <Feature icon="&#xe02b;" title="Easily Customised" text="Filter your candidates easy by location, technology, reputation, disponibility, skills and more." />
                    <Feature icon="&#xe049;" title="DIRECT COMUNICATION" text="Conctact your candidates directly and ask them all the info you need. This way you can find the perfec fit for your project, team or enterprise." />
                    <Feature icon="&#xe04e;" title="KEEP TRACK" text="Keep track of your favorite candiadtes adding them to your list. Once they are available or meet the reuirements you need you can reach them first." />
                </div>
            </div>
        </section>
        <Footer/>
      </section>
    )
  }
})
