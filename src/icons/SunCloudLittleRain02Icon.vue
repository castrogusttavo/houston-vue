
<template>
  <Icon :iconName="'sun-cloud-little-rain-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloudLittleRain02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-little-rain-02'
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
