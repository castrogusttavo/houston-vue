
<template>
  <Icon :iconName="'sun-cloud-fast-wind-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloudFastWind01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-fast-wind-01'
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
