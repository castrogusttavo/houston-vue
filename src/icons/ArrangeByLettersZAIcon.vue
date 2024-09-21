
<template>
  <Icon :iconName="'arrange-by-letters-z-a'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrangeByLettersZAIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrange-by-letters-z-a'
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
