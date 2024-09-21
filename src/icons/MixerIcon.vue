
<template>
  <Icon :iconName="'mixer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MixerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mixer'
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
