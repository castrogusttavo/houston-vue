
<template>
  <Icon :iconName="'arrow-down-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDownDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-double'
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
