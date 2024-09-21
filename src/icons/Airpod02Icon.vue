
<template>
  <Icon :iconName="'airpod-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Airpod02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airpod-02'
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
