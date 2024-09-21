
<template>
  <Icon :iconName="'contact'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ContactIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'contact'
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
