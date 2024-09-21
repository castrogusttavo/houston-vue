
<template>
  <Icon :iconName="'yen-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YenCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yen-circle'
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
