<template>
    <h1>Welcome to the Home Page</h1>
    <p>This application demonstrates CRUD operations using Vue.js and Axios.</p>
    <div class="container mt-4" style="width:70%">
        <div class="accordion">
            <div class="accordion-item mb-2" style="border-radius: 10px;">
                <h1 class="accordion-header bg-dark" style="border-radius: 10px;">
                    <button class="accordion-button bg-dark text-white" @click="post_=!post_">Axios post</button>
                </h1>
                <p class="accordion-body text-secondary" v-show="post_" style="text-align: left;">It is used to send data to the server.
                    <pre>
                axios.post('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee',
                {
                    name: this.employee.name,
                    designation: this.employee.designation,
                    salary: Number(this.employee.salary),
                    department: this.employee.department
                }
                )
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err));
        </pre>
                </p>
            </div>
            <div class="accordion-item mb-2" style="border-radius: 10px;">
                <h1 class="accordion-header bg-dark" style="border-radius: 10px;">
                    <button class="accordion-button bg-dark text-white" @click="get_=!get_">Axios get</button>
                </h1>
                <p class="accordion-body text-secondary" v-show="get_" style="text-align: left;">It is used to retrieve data from the server
                    <pre>
                axios.get('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee')
                .then(res=>this.list = res.data)
                .catch(err=>console.log(err));
        </pre></p>
            </div>
            <div class="accordion-item mb-2" style="border-radius: 10px;">
                <h1 class="accordion-header bg-dark" style="border-radius: 10px;">
                    <button class="accordion-button bg-dark text-white" @click="put_=!put_">Axios put</button>
                </h1>
                <p class="accordion-body text-secondary" v-show="put_" style="text-align: left;">It is used to update data on the server.
                    <pre>
                axios.put('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee/' + this.employee.id,
                {
                    name: this.employee.name,
                    designation: this.employee.designation,
                    salary: Number(this.employee.salary),
                    department: this.employee.department
                }
                )
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err));
        </pre>
                </p>
            </div>
            <div class="accordion-item mb-2" style="border-radius: 10px;">
                <h1 class="accordion-header bg-dark" style="border-radius: 10px;">
                    <button class="accordion-button bg-dark text-white" @click="delete_=!delete_">Axios delete</button>
                </h1>
                <p class="accordion-body text-secondary" v-show="delete_" style="text-align: left;">It is used to delete data from the server.
                    <pre>
                axios.delete('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee/' + this.employee.id)
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err));
        </pre></p>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name:'HomePage',
    data(){
        return{
            post_:false,
            get_:false,
            put_:false,
            delete_:false
        }
    }
}
</script>
<style scoped>
pre{
    text-align: left;
}
div.accordion-item{
    border-radius:10px;
    overflow:hidden;
}
</style>