
<template>
  <Icon :iconName="'picasa'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PicasaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'picasa'
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
