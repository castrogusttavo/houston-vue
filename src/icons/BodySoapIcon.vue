
<template>
  <Icon :iconName="'body-soap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodySoapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-soap'
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
