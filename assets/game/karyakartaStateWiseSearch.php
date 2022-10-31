<div class="page-content">
    <div class="container">
        <!-- BEGIN PAGE BREADCRUMBS -->
        <!-- <ul class="page-breadcrumb breadcrumb">
            <li>
                <a href="index.html">Home</a>
                <i class="fa fa-circle"></i>
            </li>
            <li>
                <a href="#">Report</a>
                <i class="fa fa-circle"></i>
            </li>
            <li>
                <span>MWR</span>
            </li>
        </ul> -->
        <div class="page-content-inner">
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN SAMPLE TABLE PORTLET-->
                    <div class="portlet box blue">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs"></i>KIF INFO Data -(STATE WISE)
                            </div>
                            <div style="float:right;margin-left:10px;">
                                <a class="dt-button buttons-pdf buttons-html5 btn default" href="<?php echo $base_url ?>user/kif/karyakartaStateWiseReport"><span style="font-size:18px">BACK</span></a>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="table-responsive">
                                <?php
                                    $total_M=0;
                                    $total_F=0;
                                    $total_A=0;
                                ?>                     
                                <table width="755" border="1" align="center">
                                    <tr>
                                        <th width="157" height="27" class="form-all-a"><span style="color : maroon">Sl</span></th>
                                        <th width="157" height="27" class="form-all-a"><span style="color : maroon">Name</span></th>
                                        <th width="157" height="27" class="form-all-a"><span style="color : maroon">KID</span></th>
                                        <th width="213" class="form-all-a"><span style="color : maroon">Designation</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Aanchal Name</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Aanchal code</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Sanch Name</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Sanch Code</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Upsanch Name</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Upsanch Code</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Payment Chapter</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Qualification</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">Bank Acc No.</span></th>
                                        <th width="158" class="form-all-a"><span style="color : maroon">IFSC</span></th>
                                        <th width="77" class="form-all-a"><span style="color : maroon">Gender</span></th>
                                        <th width="77" class="form-all-a"><span style="color : maroon">Community</span></th>
                                        <th width="109" class="form-all-a"><span style="color : maroon">Address</span></th>
                                        <th width="93" class="form-all-a"><span style="color : maroon">Contact No </span></th>
                                        <th width="86" class="form-all-a"><span style="color : maroon">DOB</span></th>
                                        <th width="86" class="form-all-a"><span style="color : maroon">DOJ</span></th>
                                        <th width="114" class="form-all-a"><span style="color : maroon">Email</span></th>
                                        <th width="114" class="form-all-a"><span style="color : maroon"><b>Image</span></b></th>
                                        
                                    </tr>
                                    <?php $sl=1; foreach ($staff_arr as $key => $value) { ?>
                                    <tr>
                                        <td width="150" class="form-all-a"><?php echo $sl++ ?></td> 
                                        <td width="150" class="form-all-a"><?php echo $value['mfs_desc']; ?></td>
                                        <td width="150" class="form-all-a"><?php echo $value['mfs_code']; ?></td>
                                        <td width="280" class="form-all-a"><?php echo $value['eod_desc']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_anchal_name']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_anchal_code']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_sanch_name']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_sanch_code']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_upsanch_name']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_upsanch_code']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_funding_chapter']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_qualification']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_bank_acc']; ?></td>
                                        <td width="30" class="form-all-a"><?php echo $value['mfs_ifsc']; ?></td>
                                        <td width="50" class="form-all-a"><?php echo $value['mfs_gender']; ?></td>
                                        <td width="50" class="form-all-a"><?php echo $value['mfs_community']; ?></td>
                                        <td width="200" class="form-all-a"><?php echo $value['mfs_address']; ?></td>
                                        <td width="50" class="form-all-a"><?php echo $value['mfs_contact_no']; ?></td>
                                        <td width="80" class="form-all-a"><?php echo $value['mfs_dob']; ?></td>
                                        <td width="80" class="form-all-a"><?php echo $value['mfs_joining_date']; ?></td>
                                        <td width="100" class="form-all-a"><?php echo $value['mfs_email_id']; ?></td>
                                        <?php if($value['mfs_image']==null || $value['mfs_image']=="" ){?>
                                        <td width="100px" height="100px"class="form-all-a"><?php echo "NA";?></td>
                                        <?php } else {?>                                            
                                        <td width="100px" height="100px" class="form-all-a"><img src="<?php echo base_url()."uploads/karyakartapic/".$value['mfs_image'];?>" width="100px" height="100px"></td>
                                    <?php }?>

                                    </tr> 
                                    <?php } ?>
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