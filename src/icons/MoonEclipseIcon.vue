
<template>
  <Icon :iconName="'moon-eclipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonEclipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-eclipse'
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
