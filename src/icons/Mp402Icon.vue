
<template>
  <Icon :iconName="'mp-4-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mp402Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mp-4-02'
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
