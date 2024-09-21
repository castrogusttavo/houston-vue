
<template>
  <Icon :iconName="'keyframes-multiple-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesMultipleAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-multiple-add'
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
