
<template>
  <Icon :iconName="'text-underline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextUnderlineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-underline'
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
