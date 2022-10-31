<style type="text/css">
td,th{
    padding: 2px;
    text-align: center;
}
</style>
<div class="page-content">
    <div class="container">
        <!-- BEGIN PAGE BREADCRUMBS -->
       <ul class="page-breadcrumb breadcrumb">
                <li>
                    <a href="<?php echo base_url(); ?>user/dashboard/home">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <a href="<?php echo base_url(); ?>user/reports">Reports</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <a href="<?php echo base_url(); ?>user/gkv/gkvAnchalwiseReport">Search for GKV</a>
                    <i class="fa fa-circle"></i>
                </li>
                 <li>
                    <span>GKV Data</span>
                </li>
                
            </ul>

        <!-- END PAGE BREADCRUMBS -->    
        <div class="page-content-inner">
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN SAMPLE TABLE PORTLET-->
                    <div class="portlet box blue">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs"></i>GKV Data 
                            </div>
                            <div style="float:right;margin-left:10px;">
                                <a class="dt-button buttons-pdf buttons-html5 btn default" href="<?php echo $base_url ?>user/gkv/gkvAnchalwiseReport"><span style="font-size:18px">BACK</span></a>
                            </div>
<!--                             <div style="float:right">
                                <a class="dt-button buttons-pdf buttons-html5 btn default" target="_blank" href="<?php echo $base_url ?>user/gkv/search_pdf/<?php echo $anchal; ?>/<?php echo $month; ?>/<?php echo $year; ?>"><span style="font-size:18px">PDF</span></a>
                            </div> -->
                        </div>
                        <div class="portlet-body">
                            <div class="table-responsive">
                                <table width="100%" >
                                    <tr>
                                        <td colspan="6" align="center" style="font-size:20px;"> <b>AROGYA</b></td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" align="center" style="font-size:20px;"> <b>Gram Karya Vivaran</b></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><b>Anchal&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<?php echo $anchalName; ?></b></td>
                                        <td align="center"><b>Month&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<?php echo $month; ?></b></td>
                                        <td align="center"><b>Year&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<?php echo $fullyear; ?></b></td>

                                    </tr>
                                </table>
                                <table border="1">
                                    <?php 
                                    $count=0;
                                    $prev_sanch_code="";
                                        foreach($gkv as $details){ ?>
                                           
                                    <thead>
                                        <tr>
                                            
                                            <th width="30px" rowspan="2">Sanch Name </th>
                                            <th width="60px" rowspan="2">Sanch Code </th>
                                            <th colspan="4" width="10px">Survey varsh mein 1 baar</th>
                                            <th colspan="2" width="10px">Arogya Gram Samiti Baithak</th>
                                            <th colspan="5" width="10px">Arogya Sevika Poster Pardarshan</th>
                                            <th colspan="3" width="10px">Arogya Sevika Dwara Vidyalay Samparkk</th>
                                            <th colspan="4" width="10px">Parivar sampark</th>
                                            <th colspan="7" width="10px">Jagran Karyakram</th>
                                            <th colspan="4" width="10px">Rally</th>
                                            <th colspan="2" width="10px">Yojna</th>
                                            <th colspan="4" width="10px">Gharelu Upchar</th>
                                            <!-- <th colspan="7" width="10px">Medical Camp</th> -->
                                            <!-- <th style="display:none;" colspan="0" width="10px">Present</th>
                                           <th colspan="3" width="10px">Janam awam mrityu dar ki sankhya</th>
                                            <th colspan="2" width="10px">Gram samiti baithak</th>
                                            <th colspan="3" width="10px">Sanch Samiti Baithak</th>
                                            <th colspan="3" width="10px">Abyas Varg</th>
                                            <th colspan="8" width="10px">Yojna</th> -->
                                            
                                        </tr>
                                        <tr>
                                            <th>Mahila.</th>
                                            <th>Purush</th>
                                            <th>Bacche.</th>
                                            <th>Total</th>
                                            
                                            <th>Arogya Samiti</th>
                                            <th>Sevika</th>
                                            <th width="10px">1st week</th>
                                            <th width="10px">2nd week</th>
                                            <th width="10px">3rd week </th>
                                            <th width="10px">4th week</th>
                                            <th width="10px">Total</th>
                                            <th width="10px">Ekal vidyalay</th>
                                            <th width="10px">Anyah vidyalay</th>
                                            <th width="10px">Kul sankhya</th>
                                            <!-- <th width="10px">Pariwar Sankhya</th> -->
                                            <th width="10px">Purush Sankhya</th>
                                            <th width="10px">Mahila Sankhya</th>
                                            <th width="10px">Bacche</th>
                                            <th width="10px">Total</th>
                                            <th width="10px">Soakpit</th>
                                            <th width="10px">Compost Pit</th>
                                            <th width="10px">Poshan Vatika</th>
                                            <th width="10px">Divar Lekhan Gram Sankhya </th>
                                            <th width="10px">Divar Lekhan Sankhya</th>
                                            <th width="10px">Van Aushadi Paudha Ropan</th>
                                            <th width="10px">Brikcha Ropan</th>
                                            <th width="10px">Swacht Jagran Rally Badi</th>
                                            <th width="10px">Upasthit Sankhya</th>
                                            <th width="10px">Swacht Jagran Rally Choti</th>
                                            <th width="10px">Upasthit Sankhya</th>
                                            <th width="10px">BIMA Yojna Sankhya</th>
                                            <th width="10px">Ayushman Bharat Sankhya</th>
                                            
                                            <!-- <th width="10px">Pariwar Sankhya</th> -->
                                            <th width="10px">Purush Sankhya</th>
                                            <th width="10px">Mahila Sankhya</th>
                                            <th width="10px">Baache ki Sankhya</th>
                                            <th width="10px">Kul Labh Marij Sankhya</th>
                                            <!-- <th width="10px">Doctor ki sankhya</th>
                                            <th width="10px">Marij ki sankhya</th>
                                            <th width="10px">Mahila</th>
                                            <th width="10px">Purush</th>
                                            <th width="10px">Bacche</th>
                                            <th colspan="2" width="10px">Total patient </th> -->
                                            <!-- <th></th> -->
                                            
                                        </tr>
                                    </thead>
                                   
                                     
                                    <tbody>
                                        <tr>
                                            
                                            <th width="30px"><?php echo $details['sanch_name']; ?></th>
                                            <th width="60px"><?php echo $details['sanch_code']; ?></th>
                                            <td><?php echo $details['total_survey_mahila']; ?></td>
                                            <td><?php echo $details['total_survey_purush']; ?></td>
                                            <td><?php echo $details['total_survey_bacche']; ?></td>
                                            <td><?php echo $details['total_survey_mahila']+$details['total_survey_purush']+$details['total_survey_bacche']; ?></td>
                                            <td><?php echo $details['total_gram_baithak_samiti']; ?></td>
                                            <td><?php echo $details['total_gram_baithak_sevika']; ?></td>
                                            <td><?php echo $details['total_poster_1']; ?></td>
                                            <td><?php echo $details['total_poster_2']; ?></td>
                                            <td><?php echo $details['total_poster_3']; ?></td>
                                            <td><?php echo $details['total_poster_4']; ?></td>
                                            <td><?php echo $details['total_poster_1']+$details['total_poster_2']+$details['total_poster_3']+$details['total_poster_4']; ?></td>
                                            <td><?php echo $details['total_ekal_vid']; ?></td>
                                            <td><?php echo $details['total_anyah_vid']; ?></td>
                                            <td><?php echo $details['total_kul_sank']; ?></td>
                                            
                                            <!-- <td><?php echo $details['total_parivar_pariwar']; ?></td> -->
                                            <td><?php echo $details['total_purush']; ?></td>
                                            <td><?php echo $details['total_parivar_mahila']; ?></td>
                                            <td><?php echo $details['total_parivar_bacche']; ?></td>
                                            <td><?php echo $details['total_parivar_total']; ?></td>
                                            <td><?php echo $details['total_khaad_gadha']; ?></td>
                                            <td><?php echo $details['total_sokta_gadha']; ?></td>
                                            <td><?php echo $details['total_posan_vatika']; ?></td>
                                            <td><?php echo $details['total_lekhan_gram']; ?></td>
                                            <td><?php echo $details['total_lekhan_slogan']; ?></td>
                                            <td><?php echo $details['total_van_aushadi'];?></td>
                                            <td><?php echo $details['total_brikcha_ropan']; ?></td>
                                            <td><?php echo $details['total_rally_badi']; ?></td>
                                            <td><?php echo $details['total_rally_badi_upas']; ?></td>
                                            <td><?php echo $details['total_rally_choti']; ?></td>
                                            <td><?php echo $details['total_rally_choti_upas']; ?></td>
                                            <td><?php echo $details['total_yojna_bima']; ?></td>
                                            <td><?php echo $details['total_yojna_ayushman']; ?></td>
                                            
                                            <!-- <td><?php echo $details['total_gharelu_pariwar']; ?></td> -->
                                            <td><?php echo $details['total_gharelu_purush']; ?></td>
                                            <td><?php echo $details['total_gharelu_mahila'];?></td>
                                            <td><?php echo $details['total_gharelu_bacchee']; ?></td>
                                            <td><?php echo $details['total_gharelu_purush']+$details['total_gharelu_mahila']+$details['total_gharelu_bacchee']; ?></td>
                                            <!-- <td><?php echo $details['total_medical_doctor']; ?></td>
                                            <td><?php echo $details['total_medical_marij']; ?></td>
                                            <td><?php echo $details['total_medical_mahila']; ?></td>
                                            <td><?php echo $details['total_medical_purush']; ?></td>
                                            <td><?php echo $details['total_medical_bacche']; ?></td>
                                            <td colspan="2"><?php echo $details['total_medical_total'];?></td> -->
                                            <!-- <td></td> -->
                                            
                                        </tr>
                                        
                                    </tbody>
                                    <?php }?>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- END SAMPLE TABLE PORTLET-->
                </div>
            </div>
        </div>
    </div>
</div>