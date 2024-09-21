
<template>
  <Icon :iconName="'xls-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Xls02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xls-02'
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
