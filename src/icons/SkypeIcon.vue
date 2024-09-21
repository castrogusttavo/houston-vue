
<template>
  <Icon :iconName="'skype'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SkypeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'skype'
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
