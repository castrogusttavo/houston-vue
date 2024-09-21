
<template>
  <Icon :iconName="'cloud-saving-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudSavingDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-saving-done-02'
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
