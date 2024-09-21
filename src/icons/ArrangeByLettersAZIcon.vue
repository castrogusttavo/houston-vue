
<template>
  <Icon :iconName="'arrange-by-letters-a-z'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrangeByLettersAZIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrange-by-letters-a-z'
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
