 <!-- BEGIN PAGE CONTENT BODY -->
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
                    <span>Search for GKV</span>
                </li>
                
            </ul>
            <!-- END PAGE BREADCRUMBS -->
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="page-content-inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="portlet light " id="form_wizard_1">
                            <div class="portlet-body form">
                                <form class="form-horizontal gkv_form" action="<?php echo $base_url; ?>user/gkv/gkvAnchalwiseSearch" id="submit_form" method="POST">
                                    <div class="form-wizard">
                                        <div class="form-body">
                                            <div class="tab-content">                                                                       
                                                <div class="tab-pane active" id="">
                                                    <h3 class="block">Search for GKV</h3>
                                                    <?php if($this->site_admin_id!=1 && $this->site_admin_id!=232 && $this->site_admin_id!=233 && $this->site_admin_id!=234 && $this->site_admin_id!=6){ ?>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Region/Bhag:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                            <span><?php echo $region_name; ?></span>
                                                            <input type="hidden" name="region" value="<?php echo $region_code; ?>">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Anchal:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <span><?php echo $anchal_name; ?></span>
                                                           <input type="hidden" name="anchal" value="<?php echo $anchal_code; ?>">
                                                        </div>
                                                    </div>
                                                    <?php }else{ ?>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Region/Bhag:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                            <select class="form-control region" name="region">
                                                                <?php foreach ($regionlist as $region) { ?>
                                                                    <option value="<?php echo $region['mri_code'] ?>"> <?php echo $region['mri_desc'] ?></option>
                                                                <?php } ?>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Anchal:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <select class="form-control anchal" name="anchal">
                                                            <option value=""> Please select anchal</option>
                                                           </select>
                                                        </div>
                                                    </div>
                                                    <?php } ?>
                                                    <!-- <div class="form-group">
                                                        <label class="control-label col-md-3">Sanch:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <select  class="form-control sanch" name="sanch">
                                                                <option value=""> Please select sanch</option>
                                                                <?php 
                                                                    if(count($sanchlist) > 0){
                                                                        foreach ($sanchlist as $sanch) {
                                                                ?>
                                                                    <option value="<?php echo $sanch['sanch_code'] ?>"><?php echo $sanch['sanch_name'] ?></option>
                                                                <?php                                                                                                  }
                                                                     }
                                                                ?>
                                                            </select>
                                                        </div>
                                                    </div>  -->
                                                    <!-- <div class="form-group">
                                                        <label class="control-label col-md-3">Funding Chapter:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <select  class="form-control funding_chapter" name="mgkvh_mfc_id">
                                                                <option value=""> Please select chapter</option>
                                                              
                                                            </select>
                                                        </div>
                                                    </div> --> 
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Month:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <select  class="form-control month" name="month">
                                                            <?php foreach ($monthlist as $month) { ?>
                                                                <option value="<?php echo $month['em_code'] ?>"> <?php echo $month['em_desc'] ?></option>
                                                            <?php } ?> 
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Year:
                                                            <span class="required"> * </span>
                                                        </label>
                                                        <div class="col-md-4">
                                                           <select  class="form-control year" name="year">
                                                                <?php foreach ($yearlist as $year) { ?>
                                                                <option value="<?php echo $year['ey_code'] ?>"> <?php echo $year['ey_desc'] ?></option>
                                                                <?php } ?> 
                                                              
                                                            </select>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-md-offset-3 col-md-9">
                                                    <button type="submit" class="btn green"> Submit
                                                    </button>                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END PAGE CONTENT INNER
        </div>
    </div>
    <!-END PAGE CONTENT BODY -->
    <!-- END CONTENT BODY -->
</div>
<!-- END CONTENT -->
<!-- BEGIN QUICK SIDEBAR --> <!-- BEGIN PAGE CONTENT BODY -->
