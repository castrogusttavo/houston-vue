
<template>
  <Icon :iconName="'yen-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YenSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yen-square'
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
