<template>
  <div :class="[`groupe-176`, className || ``]">
    <div class="groupe-1-2">
      <div class="groupe-1-2">
        <div class="groupe-17" :style="{ 'background-image': 'url(' + src + ')' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Groupe176",
  props: ["src", "className"],
};
</script>

<style>
.groupe-176 {
  display: flex;
  height: 177px;
  left: 344px;
  opacity: 0.6;
  position: absolute;
  top: 318px;
  width: 203px;
}

.groupe-1-2 {
  display: flex;
  flex: 1;
  width: 203.06px;
}

.groupe-17 {
  background-position: 50% 50%;
  background-size: cover;
  flex: 1;
  margin-bottom: 3.3px;
  margin-left: 3.3px;
  margin-right: 3.3px;
  margin-top: 3.3px;
  width: 196.37px;
}

.groupe-176.groupe-181 {
  opacity: 0.95;
}
</style>
