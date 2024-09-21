
<template>
  <Icon :iconName="'c-programming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CProgrammingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'c-programming'
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
