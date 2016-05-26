export default {
	getInitialState() {
		openedArticle: ''
	}

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openedArticle: this.state.openedArticle == id ? null : id
        })
    }
}