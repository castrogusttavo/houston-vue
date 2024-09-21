
<template>
  <Icon :iconName="'leaving-geo-fence'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeavingGeoFenceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'leaving-geo-fence'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
