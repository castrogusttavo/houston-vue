
<template>
  <Icon :iconName="'txt-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Txt02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'txt-02'
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
