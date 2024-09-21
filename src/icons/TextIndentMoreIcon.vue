
<template>
  <Icon :iconName="'text-indent-more'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextIndentMoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-indent-more'
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
