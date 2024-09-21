
<template>
  <Icon :iconName="'sun-cloud-mid-rain-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloudMidRain01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-mid-rain-01'
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
