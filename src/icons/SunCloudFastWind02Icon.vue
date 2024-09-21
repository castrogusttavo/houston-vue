
<template>
  <Icon :iconName="'sun-cloud-fast-wind-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloudFastWind02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-fast-wind-02'
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
