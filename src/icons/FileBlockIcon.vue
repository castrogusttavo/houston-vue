
<template>
  <Icon :iconName="'file-block'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileBlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-block'
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
