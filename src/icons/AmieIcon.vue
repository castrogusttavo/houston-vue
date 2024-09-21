
<template>
  <Icon :iconName="'amie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AmieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'amie'
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
