
<template>
  <Icon :iconName="'align-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-left'
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
