class Blog {
    constructor(options) {
        this.title = options.title;
        this.short_desc = options.short;
        this.desc  = options.desc;
        this.date = options.date;
    }

    get_title() {
        return this.title;
    }

    set_title(title) {
        this.title = title;
    }

    get_short_desc() {
        return this.short_desc
    }

    set_short_desc(desc) {
        this.short_desc = desc;
    }
}