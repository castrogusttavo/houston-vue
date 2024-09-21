
<template>
  <Icon :iconName="'laurel-wreath-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaurelWreathRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laurel-wreath-right-02'
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
