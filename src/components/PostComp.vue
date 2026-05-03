<template>
    <div class="container">
        <h1>Posting data using axios</h1>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card p-3">
            <form  class='form '>
            <h2>Employee Form</h2>
            <input type="text" class="form-control" v-model ="employee.name" placeholder="Enter name"><br><br>
            <input type="text" class="form-control" v-model="employee.designation" placeholder="Enter designation"><br><br>
            <input type="text" class="form-control" v-model="employee.salary" placeholder="Enter salary"><br><br>
            <input type="text" class="form-control" v-model="employee.department" placeholder="Enter department"><br><br>
            <button @click="PostData" class="btn btn-dark">Submit</button>
        </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name:'PostComp',
        data(){
            return{
                employee:{
                    name:null,
                    designation:null,
                    salary:null,
                    department:null
                }
            }
        },
        methods:{
            PostData(e){
                let regEx =/^\d+$/;
                if(this.employee.name==null || this.employee.designation==null || this.employee.salary==null || this.employee.department==null){
                    alert('Please fill all the fields');
                    return;
                }
                if(!regEx.test(this.employee.salary)){
                    alert('Salary should be a non negative number');
                    return;
                }
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
                e.preventDefault();
                this.employee.name='';
                this.employee.designation='';
                this.employee.salary='';
                this.employee.department='';
                alert('Data inserted successfully');
            }
        }
    }
</script>
<style scoped>
</style>