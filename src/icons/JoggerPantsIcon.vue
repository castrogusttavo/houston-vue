
<template>
  <Icon :iconName="'jogger-pants'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JoggerPantsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jogger-pants'
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
