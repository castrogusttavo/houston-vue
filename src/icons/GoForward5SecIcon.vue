
<template>
  <Icon :iconName="'go-forward-5-sec'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoForward5SecIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'go-forward-5-sec'
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
