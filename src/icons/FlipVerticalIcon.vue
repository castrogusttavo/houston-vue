
<template>
  <Icon :iconName="'flip-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-vertical'
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
