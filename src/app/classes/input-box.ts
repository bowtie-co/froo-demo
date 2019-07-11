export class InputBox {
    name: string
    title: string
    content: string
    placeholder: string
    autoComplete: boolean
    prepend: object
    append: object
    rules: object
    label: boolean
    isRequired : string
    constructor(
        name: string,
        title: string,
        content: string,
        placeholder: string,
        autoComplete: boolean,
        label: boolean ) {
        this.name = name
        this.title = title
        this.content = content
        this.placeholder = placeholder
        this.autoComplete = autoComplete
        this.label = label
    }
    setRules(rules: object) {
        this.rules = rules
    }
    makeRequired()  {
        this.isRequired = 'required'
    }
  }