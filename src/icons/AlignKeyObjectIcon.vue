
<template>
  <Icon :iconName="'align-key-object'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignKeyObjectIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-key-object'
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
