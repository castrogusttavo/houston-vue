
<template>
  <Icon :iconName="'sun-cloud-mid-snow-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloudMidSnow02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-mid-snow-02'
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
