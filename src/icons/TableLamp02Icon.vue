
<template>
  <Icon :iconName="'table-lamp-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TableLamp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-lamp-02'
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
