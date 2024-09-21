
<template>
  <Icon :iconName="'xml-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Xml02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xml-02'
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
