Main = React.createClass({
  render() {
    return (
      <section className="main-panel">
        <section className="header-inside">
          <Header />
        </section>
        <section className="candidates">
          <div className="filter">
            <span className="search">SEARCH CANDIDATES</span>
            <span className="filer-textfield">
              <i className="icon-magnifying-glass"></i><input type="text" className="" placeholder="ReactJs, Meteor, DevOps" required=""></input>
            </span>
            <span className="found">100 CANDIDATES FOUND</span>
          </div>
          <CandidatesList/>
        </section>
      </section>
    )
  }
});
