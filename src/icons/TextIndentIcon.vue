
<template>
  <Icon :iconName="'text-indent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextIndentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-indent'
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
