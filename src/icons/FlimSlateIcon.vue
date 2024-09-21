
<template>
  <Icon :iconName="'flim-slate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlimSlateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flim-slate'
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
