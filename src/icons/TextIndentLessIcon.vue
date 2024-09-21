
<template>
  <Icon :iconName="'text-indent-less'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextIndentLessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-indent-less'
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
