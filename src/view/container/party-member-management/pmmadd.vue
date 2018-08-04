<style>
  /*#pmmadd{padding: 10px}*/
</style>
<template>
  <div id="pmmadd">
    <el-form :model="ruleForm" :rules="rules" ref="pmmaddRuleForm" label-width="100px" style="background-color: white;padding: 10px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生年月" prop="dateOfBirth">
            <el-date-picker
              v-model="ruleForm.dateOfBirth"
              type="month"
              placeholder="选择年月">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="民族" prop="nation">
            <el-input v-model="ruleForm.nation"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="nativePlace">
            <el-input v-model="ruleForm.nativePlace"></el-input>
          </el-form-item>
          <el-form-item label="婚姻状况" prop="maritalStatus">
            <el-radio-group v-model="ruleForm.maritalStatus">
              <el-radio :label="0">已婚</el-radio>
              <el-radio :label="1">未婚</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="入党时间" prop="timeToJoinTheParty">
            <el-date-picker
              v-model="ruleForm.timeToJoinTheParty"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="转正时间" prop="correctionTime">
            <el-date-picker
              v-model="ruleForm.correctionTime"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="学历" prop="education">
            <el-input v-model="ruleForm.education"></el-input>
          </el-form-item>
          <el-form-item label="院校" prop="colleges">
            <el-input v-model="ruleForm.colleges"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="ruleForm.major"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="classesAndGrades">
            <el-input v-model="ruleForm.classesAndGrades"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="户籍所在地" prop="placeOfHouseholdRegistration">
            <el-input v-model="ruleForm.placeOfHouseholdRegistration"></el-input>
          </el-form-item>
          <el-form-item label="现居住地" prop="residentialAddress">
            <el-input v-model="ruleForm.residentialAddress"></el-input>
          </el-form-item>
          <el-form-item label="所在党支部" prop="partyBranch">
            <el-input v-model="ruleForm.partyBranch"></el-input>
          </el-form-item>
          <el-form-item label="入党介绍人" prop="introducer">
            <el-input v-model="ruleForm.introducer"></el-input>
          </el-form-item>
          <el-form-item label="党内职务" prop="innerPartyDuties">
            <el-input v-model="ruleForm.innerPartyDuties"></el-input>
          </el-form-item>
          <el-form-item label="月应缴党费" prop="cost">
            <el-input v-model="ruleForm.cost"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idNumber">
            <el-input v-model="ruleForm.idNumber"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('pmmaddRuleForm')">立即创建</el-button>
            <el-button @click="resetForm('pmmaddRuleForm')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {
          name:"",
          sex:0,
          dateOfBirth:"",
          nation:"",
          nativePlace:"",
          maritalStatus:0,
          timeToJoinTheParty:"",
          correctionTime:"",
          education:"",
          colleges:"",
          major:"",
          classesAndGrades:"",
          placeOfHouseholdRegistration:"",
          residentialAddress:"",
          partyBranch:"",
          introducer:"",
          innerPartyDuties:"",
          cost:"",
          phoneNumber:"",
          idNumber:""
        },
        rules: {
          name:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          sex:0,
          dateOfBirth:[{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
          nation:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          nativePlace:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          maritalStatus:0,
          timeToJoinTheParty:[{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
          correctionTime:[{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
          education:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          colleges:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          major:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          classesAndGrades:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          placeOfHouseholdRegistration:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          residentialAddress:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          partyBranch:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          introducer:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          innerPartyDuties:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          cost:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          phoneNumber:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ],
          idNumber:[
            { required: true, message: '请输入活动名称', trigger: 'change' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let _this = this;
            axios.get('http://localhost:3000/test',{params:{"ruleForm":_this.ruleForm}})
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            // console.log(this.ruleForm)
          } else {
            console.log('error submit!!');

            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
