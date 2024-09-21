
<template>
  <Icon :iconName="'sailboat-offshore'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SailboatOffshoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sailboat-offshore'
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
